const expresiones = {
    nombre: /^[a-zA-ZáéíóúAÉÍÓÚÑñ ]+$/,
    apellido:
       /^[A-Za-z\u00E9\u00E0\u00EB\u00E1\u00ED\u00F3\u00FA\u00FC\u00F1][A-Za-z\u00E9\u00E0\u00EB\u00E1\u00ED\u00F3\u00FA\u00FC\u00F1 ]{1,49}$/,
    DNI: /^[0-9]{8}$/,
    pasaporte: /^[a-zA-Z0-9]{12}$/,
    carnetExtranjeria: /^[a-zA-Z0-9]{8,12}$/,
    numero: /(\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
    fechaNacimiento: /((19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
    fechaNacimiento2: /(0[1-9]|[12]\d|3[01]) \/ (0[1-9]|1[0-2]) \/ ((19|20)\d{2})/,
    celular: /^[0-9]{08,15}$/,
    email: /^[-a-zzéàëáíóúüñ¿¡0-9~!$%^&*_=+}{\'?]+(\.[-a-zzéàëáíóúüñ¿¡0-9~!$%^&*_=+}{\'?]+)*@([a-zzéàëáíóúüñ¿¡0-9_][-a-zzéàëáíóúüñ¿¡0-9_]*(\.[-a-zzéàëáíóúüñ¿¡0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i,
 
    ruc: /^(10|15|16|17|20)[0-9]{9}$/,
    razonSocial:
       /^[A-Za-z0-9\u00E9\u00E0\u00EB\u00E1\u00ED\u00F3\u00FA\u00FC\u00F1\u00BF\u00A1_ ,-.]{1,50}$/,
    direccion:
       /^[A-Za-z0-9\u00E9\u00E0\u00EB\u00E1\u00ED\u00F3\u00FA\u00FC\u00F1\u00BF\u00A1_ ,-.]{1,100}$/,
    genero: /^(M|F){1}$/,
 };
