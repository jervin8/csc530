export default function Landing_Page()  {
    return (
    <header className="dark:bg-dark-bckground sticky top-0 z-[20] mx-auto flex items-center justify-between">
      <nav>
        <ul>
          <li>
              <a href="about">About</a>
          </li>
          <li>
              <a href="login">Login</a>
          </li>
          <li>
              <a href="support" >Support</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};