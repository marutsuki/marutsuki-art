import { FC, useCallback, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { closeModal, selectModalContent } from "./modal.slice";
import { useAppDispatch } from "../../store";
import { CloseIcon } from "../icons/icons";

const Modal: FC = () => {
  const dispatch = useAppDispatch();
  const contentUrl = useSelector(selectModalContent);
  const modal = useRef<HTMLDivElement>(null);
  const doCloseModal = useCallback(() => dispatch(closeModal()), [dispatch]);

  useEffect(() => {
    const onOutsideClick = (e: MouseEvent) => {
      console.log(modal.current?.contains(e.target as Node), e.target);
      if (!modal.current?.contains(e.target as Node)) {
        doCloseModal();
      }
    };
    addEventListener("click", onOutsideClick);
    return () => removeEventListener("click", onOutsideClick);
  }, [contentUrl, doCloseModal]);

  if (contentUrl === null) {
    return null;
  }

  return (
    <>
      <div className="inset-0 fixed bg-black bg-opacity-50" />
      <section
        ref={modal}
        className="fixed z-50 rounded-md -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 p-4 bg-white shadow-2xl"
      >
        <div className="flex justify-end pb-2">
          <CloseIcon className="cursor-pointer" onClick={doCloseModal} />
        </div>
        <img
          className="max-w-[85vw] max-h-[85vh] "
          src={contentUrl}
          alt={contentUrl}
        />
      </section>
    </>
  );
};

export default Modal;
