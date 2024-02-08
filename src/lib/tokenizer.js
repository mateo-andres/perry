import GPT3Tokenizer from 'gpt3-tokenizer';

const tokenizer = new GPT3Tokenizer({ type: 'gpt3' });

export const getTokens = (text) => {
	const tokens = tokenizer.encode(text);
	return tokens.text.length;
};
