document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos el enlace "contacto" por su clase
    const contactoLink = document.querySelector('.nav-link-contacto');
  
    // Agregamos un evento click al enlace "contacto"
    contactoLink.addEventListener('click', (event) => {
      event.preventDefault(); // Prevenimos la acción predeterminada del enlace
      const pageContent = "<h1>Página de Contacto</h1><p>Este es el contenido de la página de contacto.</p>";
  
      // Obtenemos el elemento con la clase "page-content" en la página actual
      const pageContentContainer = document.querySelector('.page-content');
  
      // Reemplazamos el contenido actual con el contenido de la página de contacto
      pageContentContainer.innerHTML = pageContent;
    });
  
    // Obtenemos el enlace "Inicio" por su clase
    const inicioLink = document.querySelector('.nav-link-inicio');
  
    // Agregamos un evento click al enlace "Inicio"
    inicioLink.addEventListener('click', (event) => {
      event.preventDefault(); // Prevenimos la acción predeterminada del enlace
      window.location.href = "index.html"; // Redirigimos a la página de inicio
    });
  });
  