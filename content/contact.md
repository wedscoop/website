---
title: "Contact"
---

<form id="whatsappForm"
      onsubmit="openWhatsApp(event)"
      class="max-w-2xl mx-auto space-y-4 px-4">

  <!-- Name -->
  <div>
    <label for="name" class="block text-sm font-medium" style="font-family: 'Raleway', sans-serif; color: #E5E5E5;">
      Name
    </label>
    <input id="name" name="name" type="text" required
           class="mt-1 block w-full rounded-lg bg-[#2A2A2A] border border-zinc-700 text-white p-3 
                  focus:outline-none focus:ring-2 focus:ring-pink-600" />
  </div>

  <!-- Email -->
  <div>
    <label for="email" class="block text-sm font-medium" style="font-family: 'Raleway', sans-serif; color: #E5E5E5;">
      Email
    </label>
    <input id="email" name="email" type="email" required
           class="mt-1 block w-full rounded-lg bg-[#2A2A2A] border border-zinc-700 text-white p-3 
                  focus:outline-none focus:ring-2 focus:ring-pink-600" />
  </div>

  <!-- Event Date -->
  <div>
    <label for="date" class="block text-sm font-medium" style="font-family: 'Raleway', sans-serif; color: #E5E5E5;">
      Event date (optional)
    </label>
    <input id="date" name="date" type="date"
           class="mt-1 block w-full rounded-lg bg-[#2A2A2A] border border-zinc-700 text-white p-3 
                  focus:outline-none focus:ring-2 focus:ring-pink-600" />
  </div>

  <!-- Message -->
  <div>
    <label for="message" class="block text-sm font-medium" style="font-family: 'Raleway', sans-serif; color: #E5E5E5;">
      Message
    </label>
    <textarea id="message" name="message" rows="5" required
              class="mt-1 block w-full rounded-lg bg-[#2A2A2A] border border-zinc-700 text-white p-3 
                     focus:outline-none focus:ring-2 focus:ring-pink-600"></textarea>
  </div>

  <!-- Submit -->
  <div>
    <button type="submit"
            class="w-full inline-flex justify-center rounded-full bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 shadow transition"
            aria-label="Send message via WhatsApp">
      Send via WhatsApp
    </button>
  </div>
</form>

<!-- Address Section -->
<div class="max-w-2xl mx-auto mt-12 px-4 text-center text-gray-300" style="font-family: 'Raleway', sans-serif;">
  <h2 class="text-xl font-semibold mb-2 text-white">Our Studio</h2>
  <p class="mb-1">Wedscoop</p>
  <p class="mb-1">Flat No 45, Friends Apartments</p>
  <p class="mb-1">Sector 9, Rohini</p>
  <p class="mb-1">Delhi 110085</p>
  <p class="mt-3">
    📞 <a href="tel:+917982921411" class="text-pink-500 hover:underline">+91 98999 16151</a>
  </p>
  <p>
    ✉️ <a href="mailto:contact.wedscoop@gmail.com" class="text-pink-500 hover:underline">contact.wedscoop@gmail.com</a>
  </p>
</div>

<script>
function openWhatsApp(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const date = document.getElementById('date').value.trim();
  const message = document.getElementById('message').value.trim();

  const phoneNumber = "917982921411"; // Your WhatsApp number (with country code, no +)

  // Create the message
  let text = `Hello Wedscoop! 👋%0A%0A`;
  text += `*Name:* ${name}%0A`;
  text += `*Email:* ${email}%0A`;
  if (date) text += `*Event Date:* ${date}%0A`;
  text += `*Message:* ${message}%0A%0A`;
  text += `Sent from Wedscoop Contact Page 💍`;

  // Open WhatsApp chat
  const url = `https://wa.me/${phoneNumber}?text=${text}`;
  window.open(url, '_blank');
}
</script>
