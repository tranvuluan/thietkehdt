const modal = document.querySelector("#modal");
const closeModal = document.querySelector(".modal--inner__close");
const modalContent = document.querySelector(".modal--inner__content");
const showModal = (content) => {
  modalContent.innerHTML = content;
  modal.classList.remove("modal--hidden");
};
closeModal.addEventListener("click", () => {
  modalContent.innerHTML = "";
  modal.classList.add("modal--hidden");
});

const sizeModalBtn = document.querySelector("#sizeInfo");
sizeModalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const sizeContent = `<img src="../Image/size.jpeg" />`;
  showModal(sizeContent);
});

const shippingModalBtn = document.querySelector("#shippingInfo");
shippingModalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const shippingContent = `
        <div class="modal--inner__content__shipping">
            <h4>SHIPPING</h4>
            <ul>
              <li>Next-day and Express delivery options also available</li>
              <li>Purchases are delivered in an orange box tied with a Bolduc ribbon, with the exception of certain items</li>
              <li>See the delivery FAQs for details on shipping methods, costs and delivery times</li>
            </ul>
            <h4>RETURNS AND EXCHANGES</h4>
            <ul>
              <li>Easy and complimentary, within 14 days</li>
              <li>See conditions and procedure in our return FAQs</li>
            </ul>
          </div>`;

  showModal(shippingContent);
});

const contactInfoBtn = document.querySelector("#contactInfo");
contactInfoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const contactForm = `
        <div class="modal--inner__content__contact">
            <form>
                <h4>Have a question ?</h4>
                <input type="text" placeholder="Name" name="contact[name]">
                <input type="email" placeholder="Email" name="contact[email]">
                <textarea rows="5" placeholder="Your question" name="contact[content]"></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>`;
  showModal(contactForm);
});
