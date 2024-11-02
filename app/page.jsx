
import Feed from "@components/Feed";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-powered prompts</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, totam
        rerum accusantium quaerat incidunt explicabo culpa aspernatur ducimus
        labore neque error sapiente fugiat quis odio! Facere fugiat porro
        laborum doloribus.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
