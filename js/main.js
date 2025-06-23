$(document).ready(function () {
    let phoneMask = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    }
    let phoneOptions = {
        onKeyPress: function(val, e, field, options) {
            field.mask(phoneMask.apply({}, arguments), options);
        }
    };

    
    $('#tel').mask(phoneMask, phoneOptions);
    
    $('#contact-form').validate({
      rules: {
        nome: {
            required: true
        },
        tel: {
          required: true,
          minlength: 14
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        nome: "Por favor, informe seu nome",
        tel: "Informe um telefone válido",
        email: "Informe um e-mail válido"
      }
    });
})