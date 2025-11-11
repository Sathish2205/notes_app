import { Navbar } from "../../components/navbar";
import { SideBar } from "../../components/sidebar";
import { useNotes } from "../../context/context";
import { NotesCard } from "../../components/notescard";

export const Archive = () => {

    const {archive} =useNotes();

    // console.log(archive)
  return (
    <div>
      <Navbar />
      <main className="flex gap-3">
        <SideBar />
        <div>
          <div className="flex mt-2 flex-wrap gap-3">
            {archive?.length > 0 &&
              archive.map(({ id, title, text, isPinned }) => (
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
      </main>
    </div>
  );
};
