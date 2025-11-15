import { Navbar } from "../../components/navbar";
import { SideBar } from "../../components/sidebar";
import { useNotes } from "../../context/context";
import { NotesCard } from "../../components/notescard";
import { Footer } from "../../components/footer";

export const Bin = () => {

    const {bin} =useNotes();

console.log(bin)
  return (
    <div>
      <Navbar />
      <main className="flex gap-3">
        <SideBar />
        <div>
          <div className="flex mt-2 flex-wrap gap-3">
            {bin?.length > 0 &&
              bin.map(({ id, title, text, isPinned }) => (
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
      <Footer/>
    </div>
  );
};
