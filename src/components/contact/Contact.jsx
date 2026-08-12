import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import {
    BiLogoWhatsapp,
    BiMailSend,
    BiRightArrowAlt,
    BiSend,
} from "react-icons/bi";
import BeamsCollision from "../beams/BeamsCollision";
import { useCopy } from "../../i18n";
import { toastErrorNotify, toastSuccessNotify } from "../../helper/ToastNotify";

const EMAILJS_PLACEHOLDERS = new Set([
    "your_service_id",
    "your_template_id",
    "your_public_key",
]);

const Contact = () => {
    const { contact } = useCopy();
    const form = useRef(null);
    const [isSending, setIsSending] = useState(false);

    const sendEmail = async (event) => {
        event.preventDefault();

        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
        const credentials = [serviceId, templateId, publicKey];

        if (credentials.some((value) => !value || EMAILJS_PLACEHOLDERS.has(value))) {
            toastErrorNotify(contact.unavailableToast);
            return;
        }

        setIsSending(true);

        try {
            await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
            toastSuccessNotify(contact.successToast);
            form.current?.reset();
        } catch (error) {
            console.error("EmailJS submission failed", error);
            toastErrorNotify(contact.errorToast);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section className="contact section" id="contact">
            <BeamsCollision />

            <h2 className="section__title">{contact.title}</h2>
            <span className="section__subtitle">{contact.subtitle}</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">{contact.directTitle}</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <BiMailSend className="contact__card-icon" aria-hidden="true" focusable="false" />
                            <h3 className="contact__card-title">{contact.emailTitle}</h3>
                            <span className="contact__card-data">de.fatih.ay@gmail.com</span>
                            <a href="mailto:de.fatih.ay@gmail.com" className="contact__button">
                                {contact.emailCta}
                                <BiRightArrowAlt className="contact__button-icon" aria-hidden="true" focusable="false" />
                            </a>
                        </div>

                        <div className="contact__card">
                            <BiLogoWhatsapp className="contact__card-icon" aria-hidden="true" focusable="false" />
                            <h3 className="contact__card-title">{contact.whatsappTitle}</h3>
                            <span className="contact__card-data">+49 163 419 35 72</span>
                            <a
                                href={`https://api.whatsapp.com/send?phone=491634193572&text=${encodeURIComponent(contact.whatsappText)}`}
                                className="contact__button"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {contact.whatsappCta}
                                <BiRightArrowAlt className="contact__button-icon" aria-hidden="true" focusable="false" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">{contact.formTitle}</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag" htmlFor="contact-name">{contact.nameLabel}</label>
                            <input
                                id="contact-name"
                                type="text"
                                name="name"
                                className="contact__form-input"
                                placeholder={contact.namePlaceholder}
                                autoComplete="name"
                                minLength="2"
                                required
                            />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag" htmlFor="contact-email">{contact.emailLabel}</label>
                            <input
                                id="contact-email"
                                type="email"
                                name="email"
                                className="contact__form-input"
                                placeholder={contact.emailPlaceholder}
                                autoComplete="email"
                                required
                            />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag" htmlFor="contact-project">{contact.projectLabel}</label>
                            <textarea
                                id="contact-project"
                                name="project"
                                rows="7"
                                className="contact__form-input"
                                placeholder={contact.projectPlaceholder}
                                minLength="10"
                                required
                            ></textarea>
                        </div>

                        <div className="form__button">
                            <button type="submit" className="button button--flex" disabled={isSending}>
                                {isSending ? contact.submitting : contact.submit}
                                <BiSend className="button__icon" aria-hidden="true" focusable="false" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* The ToastContainer lives in App, not here: this section sets
                `isolation: isolate`, which trapped the fixed toast in the
                section's stacking context and let the header paint over it */}
        </section>
    );
};

export default Contact;
