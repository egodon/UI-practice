import styled from 'styled-components';

const SideBarLayout = () => (
  <Container>
    <header className="row-span-1 col-span-2 bg-gray-500">
      <div className="logo-container flex justify-center">
        <span className="inline-block bg-blue-500 h-4 px-6" />
      </div>
    </header>
    <nav className="row-span-2 col-span-1 bg-gray-300 p-4">
      <ul className="w-full">
        {new Array(5).fill('').map((_, index) => (
          <li className="p-2 m-2 bg-blue-500" key={index}></li>
        ))}
      </ul>
    </nav>
    <main className="w-full flex justify-center items-center">
      <div className="bg-blue-400 p-10 w-1/3"></div>
    </main>
  </Container>
);

const Container = styled.div`
  --header-height: 7rem;
  --sidebar-width: 26rem;
  display: grid;
  grid-template-rows: var(--header-height) 1fr;
  grid-template-columns: var(--sidebar-width) 1fr;
  height: 100vh;

  header {
    display: flex;
    align-items: center;
  }

  .logo-container {
    width: var(--sidebar-width);
  }

  nav {
    display: flex;
  }

  main {
  }
`;

export default SideBarLayout;
