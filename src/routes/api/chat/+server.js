import { getTokens } from '$lib/tokenizer.js';
import { OPENAI_KEY } from '$env/static/private';

export const POST = async ({ request }) => {
	try {
		const requestData = await request.json();

		if (!requestData) {
			throw new Error('No Data');
		}

		const reqMessages = requestData.messages;

		if (!reqMessages) {
			throw new Error('No Messages');
		}

		let tokenCount = 0;

		reqMessages.forEach((message) => {
			const tokens = getTokens(message.content);
			tokenCount += tokens;
		});

		const moderationsRes = await fetch('https://api.openai.com/v1/moderations', {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${OPENAI_KEY}`
			},
			method: 'POST',
			body: JSON.stringify({
				input: reqMessages[reqMessages.length - 1].content
			})
		});

		const moderationData = await moderationsRes.json();
		const { results } = moderationData;

		if (results.flagged) {
			throw new Error('Message is flagged');
		}

		const prompt = 'You are a virtual assistant for a university called UNINPAHU';

		tokenCount += getTokens(prompt);

		if (tokenCount >= 4000) {
			throw new Error('Too many tokens');
		}

		const messages = [{ role: 'system', content: prompt }, ...reqMessages];

		const chatRequestOpts = {
			model: 'gpt-3.5-turbo',
			messages,
			temperature: 0.9,
			stream: true
		};

		const chatResponse = await fetch('https://api.openai.com/v1/chat/completions', {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${OPENAI_KEY}`
			},
			method: 'POST',
			body: JSON.stringify(chatRequestOpts)
		});

		// console.log(chatResponse);

		if (!chatResponse.ok) {
			const error = await chatResponse.json();
			throw new Error(error);
		}
		return new Response(chatResponse.body, {
			headers: {
				'Content-Type': 'text/event-stream'
			}
		});
	} catch (e) {
		console.error(e);
		return json({ error: e.message }, { status: 500 });
	}
};
