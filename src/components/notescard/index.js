import { useNotes } from "../../context/context";
import { Archive } from "../../pages/archive";
import { findNotesInArchive } from "../../utils/findNotesInArchive";

export const NotesCard = ({ id, title, text, isPinned }) => {
  const { notesDispatch, archive } = useNotes();

  const isNotesArchive = findNotesInArchive(archive, id);

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

  return (
    <div className="w-60 border border-black rounded-md p-2" key={id}>
      <div className="flex justify-between border-b border-gray-300">
        <p className="font-bold ">{title}</p>
        <button onClick={() => onPinnedClick(id)}>
          {!isNotesArchive ? (
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
          <button onClick={() => onArchiveClick(id)}>
            <span
              className={
                isNotesArchive ? `material-icons` : `material-icons-outlined`
              }
            >
              archive
            </span>
          </button>
          <button>
            <span class="material-symbols-outlined">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};
