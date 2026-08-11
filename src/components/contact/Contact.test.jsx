import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import emailjs from "@emailjs/browser";
import Contact from "./Contact";
import { toastErrorNotify, toastSuccessNotify } from "../../helper/ToastNotify";

jest.mock("@emailjs/browser", () => ({
    __esModule: true,
    default: { sendForm: jest.fn() },
}));

jest.mock("../../helper/ToastNotify", () => ({
    toastSuccessNotify: jest.fn(),
    toastErrorNotify: jest.fn(),
}));

const configuredEnvironment = {
    REACT_APP_EMAILJS_SERVICE_ID: "service_test",
    REACT_APP_EMAILJS_TEMPLATE_ID: "template_test",
    REACT_APP_EMAILJS_PUBLIC_KEY: "public_test",
};

describe("Contact form", () => {
    const originalEnvironment = process.env;

    beforeEach(() => {
        jest.clearAllMocks();
        process.env = { ...originalEnvironment, ...configuredEnvironment };
    });

    afterAll(() => {
        process.env = originalEnvironment;
    });

    it("sends the completed form through EmailJS", async () => {
        emailjs.sendForm.mockResolvedValue({ status: 200 });
        render(<Contact />);

        fireEvent.change(screen.getByLabelText("Name"), {
            target: { value: "Test User" },
        });
        fireEvent.change(screen.getByLabelText("Email"), {
            target: { value: "test@example.com" },
        });
        fireEvent.change(screen.getByLabelText("Project"), {
            target: { value: "A production website project" },
        });
        fireEvent.submit(screen.getByRole("button", { name: /send message/i }).closest("form"));

        await waitFor(() => {
            expect(emailjs.sendForm).toHaveBeenCalledWith(
                "service_test",
                "template_test",
                expect.any(HTMLFormElement),
                "public_test"
            );
        });
        await waitFor(() => {
            expect(toastSuccessNotify).toHaveBeenCalledWith(
                "Thanks—your message has been sent."
            );
        });
    });

    it("uses the fallback when EmailJS is not configured", () => {
        process.env.REACT_APP_EMAILJS_SERVICE_ID = "your_service_id";
        render(<Contact />);

        fireEvent.submit(screen.getByRole("button", { name: /send message/i }).closest("form"));

        expect(emailjs.sendForm).not.toHaveBeenCalled();
        expect(toastErrorNotify).toHaveBeenCalledWith(
            "The form is temporarily unavailable. Please use email or WhatsApp."
        );
    });
});
