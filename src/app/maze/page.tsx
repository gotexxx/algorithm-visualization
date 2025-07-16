import MazeVisualizer from "../components/ui/algorithms/maze-visualizer";

const Maze: React.FC = () => {
  return (
    <div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className={"grid grid-cols-2 gap-20 mt-[50px]"}>
          <MazeVisualizer  />
            <p className={"text-black text-2xl"}>
                Die Suche startet vom Startpunkt (oben links). Dabei wird jede erreichbare Zelle Schritt für Schritt angeschaut. Diese Suche nennt man Breitensuche, sie prüft zuerst alle Nachbarn, dann deren Nachbarn usw. Sobald das Ziel (unten rechts) gefunden wurde, merkt sich das Programm den Weg zurück und markiert ihn grün. Gelbe Felder zeigen besuchte Zellen.
                So erkennt man den kürzesten Weg vom Start zum Ziel.</p>
        </section>
      </main>
    </div>
  );
};

export default Maze;
