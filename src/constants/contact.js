// Contact information constants
export const CONTACT_INFO = {
    email: process.env.REACT_APP_CONTACT_EMAIL || "de.fatih.ay@gmail.com",
    phone: process.env.REACT_APP_CONTACT_PHONE || "+49 163 419 35 72",
    whatsapp: process.env.REACT_APP_WHATSAPP_NUMBER || "491634193572",
};

export const EMAILJS_CONFIG = {
    serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
    templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
};
