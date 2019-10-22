
  var firstNameInputNode = $('#firstName');
  var emailInputNode = $('#email');
  var commentsInputNode = $('#comments');

  firstNameInputNode.one('blur', validateEmtpyField);
  emailInputNode.one('blur', validateEmailField);
  commentsInputNode.one('blur', validateEmtpyField);


  function validateEmtpyField (event) {
    var inputNode = $(this);
    
    var errorText = '';
    inputNode.next().remove();

    if (!inputNode.val()) {
      errorText = 'Campo requerido';
    }

    if (errorText) {
      inputNode.addClass('is-invalid');
      inputNode.removeClass('is-valid');

      var parentNode = inputNode.parent();
      parentNode.append('<div class="invalid-feedback">' + errorText + '</div>')
    } else {
      inputNode.addClass('is-valid')
      inputNode.removeClass('is-invalid')
    }

    if (event.type === 'blur') {
      inputNode.on('input', validateEmtpyField);
    }

    validateButton();
  }

  function validateEmailField (event) {
    var inputNode = $(this)

    var errorText = ''

    inputNode.next().remove();

    var value = inputNode.val();

    if (!value) {
      errorText = errorText + 'Campo requerido '
    } else {
      if (value.indexOf('@') === -1) {
        errorText = errorText + 'Debe contener arroba (@) '
      }
      if (value.indexOf('.') === -1) {
        errorText = errorText + 'Debe contener punto (.) '
      }
    }

    if (errorText) {
      inputNode.addClass('is-invalid');
      inputNode.removeClass('is-valid');

      var parentNode = inputNode.parent();

      parentNode.append('<div class="invalid-feedback">' + errorText + '</div>');
    } else {
      inputNode.addClass('is-valid');
      inputNode.removeClass('is-invalid');
    }

    if (event.type === 'blur') {
      inputNode.on('input', validateEmailField)
    }

    validateButton();
  }

  function validateButton () {
    var validInputNodes = $('.is-valid');
    console.log(validInputNodes)

    if (validInputNodes.length === 3) {
      $('#submitButton').attr('disabled', false)
    }
  }

function contactController(){
    console.log('Se cargo el contacto')
    
    var firstNameInputNode = $('#firstName');
    firstNameInputNode.one('blur',validateEmtpyField);

    var emailInputNode = $('#email');
    emailInputNode.one('blur',validateEmailField);

    var commentsInputNode = $('#comments');
    commentsInputNode.one('blur', validateEmtpyField);

    var addButton = $('#submitButton');
    addButton.on('click', validateButton);

  }
  
  export default contactController