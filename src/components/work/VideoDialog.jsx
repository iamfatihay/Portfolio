import React, { useEffect, useRef } from "react";
import { BiX } from "react-icons/bi";
import "./videoDialog.css";

/*
 * A native <dialog> rather than a hand-rolled overlay: showModal() brings the
 * focus trap, the Esc key and the inert page behind it for free. The video
 * is only mounted while the dialog is open, so nothing downloads until a
 * visitor asks for it.
 */
const VideoDialog = ({ open, onClose, src, poster, title, closeLabel }) => {
    const dialogRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog || typeof dialog.showModal !== "function") return;

        if (open && !dialog.open) {
            dialog.showModal();
            // Muted, so browsers allow it to start without a second click
            videoRef.current?.play().catch(() => {});
        } else if (!open && dialog.open) {
            dialog.close();
        }
    }, [open]);

    // A click that lands on the dialog itself, not its content, is the backdrop
    const handleClick = (event) => {
        if (event.target === dialogRef.current) onClose();
    };

    return (
        <dialog
            ref={dialogRef}
            className="vdialog"
            aria-label={title}
            onClose={onClose}
            onClick={handleClick}
        >
            <div className="vdialog__frame">
                <button
                    type="button"
                    className="vdialog__close"
                    onClick={onClose}
                    aria-label={closeLabel}
                >
                    <BiX aria-hidden="true" focusable="false" />
                </button>
                {open && (
                    <video
                        ref={videoRef}
                        className="vdialog__video"
                        src={src}
                        poster={poster}
                        controls
                        muted
                        playsInline
                        preload="auto"
                    />
                )}
            </div>
        </dialog>
    );
};

export default VideoDialog;
