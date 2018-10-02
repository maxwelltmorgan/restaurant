const renderContact = () => {
  const container = document.getElementById("content");
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact");
  const contactTitle = document.createElement("h2");
  const contactText = document.createElement("h5");
  const iframe = document.createElement("iframe");
  iframe.classList.add("iframe");

  contactTitle.innerHTML = "Contact";
  contactText.innerHTML = "Come on down and enjoy our SUPER food!";
  iframe.src = "https://www.google.com/maps/embed?pb=!4v1538380288363!6m8!1m7!1szGnp0SH-X9jIkSoV0fRp9A!2m2!1d60.35031861971295!2d-1.266365586500817!3f230.91!4f-4.329999999999998!5f2.4528834797836754"
//<iframe src="https://www.google.com/maps/embed?pb=!4v1538380288363!6m8!1m7!1szGnp0SH-X9jIkSoV0fRp9A!2m2!1d60.35031861971295!2d-1.266365586500817!3f230.91!4f-4.329999999999998!5f2.4528834797836754" width="800" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>
  contactDiv.appendChild(contactTitle);
  contactDiv.appendChild(contactText);
  contactDiv.appendChild(iframe);
  container.appendChild(contactDiv);
};

export { renderContact }
