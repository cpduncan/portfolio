import "./App.css";
import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react";

const GithubGraph = ({ username }: { username: string }) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-xl bg-slate-900 border border-slate-800">
      <img
        src={`https://ghchart.rshah.org/${username}`}
        alt={`${username}'s GitHub Contribution Chart`}
        className="w-full max-w-2xl h-auto filter invert-0 dark:invert-0"
        loading="lazy"
      />
    </div>
  );
};

const Demo = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button variant="outline" size="sm">
          Open Drawer
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner padding="4">
          <Drawer.Content rounded="md">
            <Drawer.Header>
              <Drawer.Title>Drawer Title</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Drawer.Body>
            <Drawer.Footer>
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

function App() {
  return (
    <>
      <section id="center">
        <div>
          <h1>Portfolio</h1>
        </div>
        <div>
          <h2>[pic] Corbin Duncan</h2>
          <p>Slogan or something.</p>
        </div>
        {/* row objects with info on current role, location, gmail, linkedin, and github */}
        <div>
          <h3>About</h3>

          <p>Welcome to my portfolio! </p>

          <p>
            Fullstack Software Engineer working to buy back time for busy
            people.{" "}
          </p>

          <p>
            As a developer, I love to stay ahead of the curve with new tools and
            workflows while keeping a sharp understanding of their low-level
            impacts.{" "}
          </p>

          <p>
            Outside of work, I enjoy game development, music, and building
            things with my hands. Anything that gives me an outlet!{" "}
          </p>
        </div>
        <div>
          <Demo />
        </div>
        <div>
          <GithubGraph username="cpduncan" />
        </div>
        {/* row entries with projects and dropdowns for more info. Add badges of stack for each proj and hyperlink to proj in title */}
        <div>
          <h3>Projects</h3>
        </div>
        {/* selection of specialised frameworks, stack, and language skills as badges. no carousel.  */}
        <div>
          <h3>Skills</h3>
        </div>
        {/* professional exerience made same way as the projects section */}
        <div>
          <h3>Professional Experience</h3>
        </div>
      </section>
    </>
  );
}

export default App;
