import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

interface ConfirmDialogProps {
    isOpen: boolean;
    title: string;
    text: string;
    accept?: () => void;
    reject?: () => void;
    onClose?: () => void;
}

export function ConfirmDialog(props: ConfirmDialogProps) {
    const [visible, setVisible] = useState(props.isOpen);

    useEffect(() => {
        setVisible(props.isOpen);
    }, [props.isOpen]);

    const close = () => {
        setVisible(false);
        // parent prop
        if (props.onClose) {
            props.onClose();
        }
    }

    const accept = () => {
        close();

        if (props.accept) {
            props.accept();
        }
    }

    const reject = () => {
        close();

        if (props.reject) {
            props.reject();
        }
    }

    if (!visible) {
        return null;
    }

    return createPortal(
        <div className="dialog pos-f w-full h-full t-0 l-0 d-f jc-c ai-c z-dialog" style={{ backgroundColor: "rgba(0,0,0, 0.5)" }}>
            <div className="dialog-component d-f fxd-c ai-c jc-c bgc-white">
                <div className="dialog-title d-b">{ props.title }</div>
                <div className="dialog-content d-b">{ props.text }</div>
                <div className="dialog-footer d-b">
                    <button onClick={ accept }>Accept</button>
                    <button onClick={ reject }>Reject</button>
                </div>
                <button onClick={ close }>Close</button>
            </div>
        </div>,
        document.body
    )
}

