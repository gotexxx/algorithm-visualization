import Hero from "../components/ui/hero";
import MazeVisualizer from "../components/ui/algorithms/maze-visualizer";

const Maze: React.FC = () => {
  return (
    <div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero
          title={"Maze solver "}
          text={"Alghortimen zum lösen von labirynthen"}
        />
        <section>
          <MazeVisualizer />
        </section>
      </main>
    </div>
  );
};

export default Maze;
