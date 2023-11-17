<main class="bg-blue-500 p-6 grid h-screen w-full
bg-gradient-to-r
from-blue-500
via-violet-600
to-emerald-400
background-animate">
    <h1 class="text-3xl font-bold text-white text-center h-4">Asistente Virtual</h1>
    <img alt="icono del asistente virtual" src="/assets/bot2.png" class="m-auto h-96 w-96">

    <section>
        <h2 class="text-white text-xl font-bold">Iniciar sesión</h2>
        <form class="grid gap-3" method="post" action="?/login">
            <label for="mail">Correo</label>
            <input type="text" id="mail" class="rounded-md p-2">
            <label for="password">Contraseña</label>
            <input type="password" id="password" class="rounded-md p-2">
            <input type="submit" value="Ingresar" class="bg-blue-700 rounded-md p-2 text-white font-bold">
        </form>

        <a href="/" class="mt-3">Olvide mi contraseña</a>
    </section>
</main>

<style>
    body {
      font-family: "Inter", sans-serif;
    }
  
    .background-animate {
      background-size: 400%;
  
      -webkit-animation: AnimationName 4s ease infinite;
      -moz-animation: AnimationName 4s ease infinite;
      animation: AnimationName 4s ease infinite;
    }
  
    @keyframes AnimationName {
      0%,
      100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }
  </style>