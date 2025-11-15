import { useNotes } from "../../context/context";
import { Archive } from "../../pages/archive";
import { findNotesInArchive } from "../../utils/findNotesInArchive";
import { findNotesInBin } from "../../utils/findNotesInBin";
import { findNotesInImportant } from "../../utils/findNotesInImportant";

export const NotesCard = ({ id, title, text, isPinned }) => {
  const { notesDispatch, archive, bin, important } = useNotes();

  const isNotesArchive = findNotesInArchive(archive, id);
  const isNotesBin = findNotesInBin(bin, id);
  const IsNotesImportant = findNotesInImportant(important, id);

  const onPinnedClick = (id) => {
    notesDispatch({
      type: "PIN",
      payload: { id },
    });
  };

  const onArchiveClick = (id) => {
    !isNotesArchive
      ? notesDispatch({
          type: "ADD_TO_ARCHIVE",
          payload: { id },
        })
      : notesDispatch({
          type: "REMOVE_FROM_ARCHIVE",
          payload: { id },
        });
  };

  const onImportantClick = (id) => {
    !IsNotesImportant
      ? notesDispatch({
          type: "ADD_TO_IMPORTANT",
          payload: { id },
        })
      : notesDispatch({
          type: "REMOVE_FROM_IMPORTANT",
          payload: { id },
        });
  };

  const onDeleteClick = (id) => {
    if (!id) return;

    if (!isNotesArchive && !isNotesBin) {
      notesDispatch({ type: "DELETE", payload: { id } });
    } else if (isNotesArchive) {
      notesDispatch({ type: "DELETE_FROM_ARCHIVE", payload: { id } });
    } else if (isNotesBin) {
      notesDispatch({ type: "REMOVE_FROM_BIN", payload: { id } });
    }
  };

  return (
    <div className="w-60 border border-black rounded-md p-2" key={id}>
      <div className="flex justify-between border-b border-gray-300">
        <p className="font-bold ">{title}</p>
        <button onClick={() => onPinnedClick(id)}>
          {!isNotesArchive && !isNotesBin && !IsNotesImportant ? (
            <span
              className={
                isPinned ? "material-icons" : "material-icons-outlined"
              }
            >
              push_pin
            </span>
          ) : (
            <></>
          )}
        </button>
      </div>

      <div className="flex flex-col">
        <p>{text}</p>
        <div className="ml-auto">
          <button onClick={() => onImportantClick(id)}>
            {!isNotesBin && !isNotesArchive? (
              <span className="material-icons">
                {!IsNotesImportant
                  ? `label_important_outline`
                  : `label_important`}
              </span>
            ) : (
              <></>
            )}
          </button>
          <button onClick={() => onArchiveClick(id)}>
            {!isNotesBin ? (
              <span
                className={
                  isNotesArchive ? `material-icons` : `material-icons-outlined`
                }
              >
                archive
              </span>
            ) : (
              <></>
            )}
          </button>
          <button onClick={() => onDeleteClick(id)}>
            {
              !IsNotesImportant ? 
            <span class="material-symbols-outlined">delete</span>:<></>

            }
          </button>
        </div>
      </div>
    </div>
  );
};
