var iframe = document.getElementById('cloudbeds');
var style = document.createElement('style');
style.textContent =
  `.check_availability_group .btn-warning[name="check_availability"]{
	background-color: #8a346c !important;
}`;
iframe.contentDocument.head.appendChild(style);
