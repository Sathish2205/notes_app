import { useReducer } from "react";
import { Navbar } from "../../components/navbar";
import { SideBar } from "../../components/sidebar";
import { notesReducer } from "../../reducers/notesReducer";
import { NotesCard } from "../../components/notescard";
import { useNotes } from "../../context/context";

export const Home = () => {
  const { title, text, notes,archive, notesDispatch } = useNotes();

  const onTitleChange = (e) => {
    notesDispatch({
      type: "TITLE",
      payload: e.target.value,
    });
  };
  const onTextChange = (e) => {
    notesDispatch({
      type: "TEXT",
      payload: e.target.value,
    });
  };

  const onAddClick = () => {
    notesDispatch({
      type: "ADD_NOTE",
    });
    notesDispatch({
      type: "CLEAR",
    });
  };

  const pinnedNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
  const otherNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);

  return (
    <>
      <Navbar />
      <main className="flex gap-3">
        <SideBar />
        <div className="flex flex-col w-screen">
          <div className="flex flex-col w-[450px] border mt-6 h-20 relative self-center">
            <input
              value={title}
              className="border border-neutral-800 rounded-t-md focus:outline-none border-b-0 p-1"
              placeholder="Enter Title"
              onChange={onTitleChange}
            />
            <textarea
              value={text}
              className="border border-neutral-800 rounded-b-md focus:outline-none border-t-0 p-1"
              placeholder="Enter Text"
              onChange={onTextChange}
            />
            <button
              onClick={onAddClick}
              disabled={title.length == 0}
              className="w-7 h-7 absolute bottom-0 right-0 border bg-indigo-800 text-slate-50 rounded-full"
            >
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
          {pinnedNotes?.length > 0 && (
            <div className="mt-6">
              <h1>Pinned Notes</h1>
              <div className="flex mt-2 flex-wrap gap-3">
                {pinnedNotes?.length > 0 &&
                  pinnedNotes.map(({ id, title, text, isPinned }) => (
                    <NotesCard
                      key={id}
                      id={id}
                      title={title}
                      text={text}
                      isPinned={isPinned}
                    />
                  ))}
              </div>
            </div>
          )}
          {otherNotes?.length > 0 && (
            <div className="mt-6">
              <h1>Other Notes</h1>
              <div className="flex mt-2 flex-wrap gap-3">
                {otherNotes?.length > 0 &&
                  otherNotes.map(({ id, title, text, isPinned }) => (
                    <NotesCard
                      key={id}
                      id={id}
                      title={title}
                      text={text}
                      isPinned={isPinned}
                    />
                  ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};
