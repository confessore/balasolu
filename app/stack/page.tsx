import InfoCard from "@/components/info_card";
import Logo from "@/components/logo";
import Monks from "@/components/monks";
import NavGroup from "@/components/nav_group";
import Overlay from "@/components/overlay";
import Image from "next/image";

const main =
  "flex flex-col justify-between items-center py-24 min-w-full min-h-screen bg-pink-200 text-pink-900 opacity-90";
const main_dark = "dark:bg-pink-900 dark:text-pink-200";
const flex = "flex flex-col max-w-full justify-center items-center gap-1 py-5";
const javascript = [
  "JavaScript is a high-level, dynamically typed scripting language that was originally designed for adding interactivity to web pages. It allows you to manipulate web page content, handle user interactions, and dynamically update the page without requiring a full page reload. JavaScript is primarily used in web development for both front-end and back-end tasks.",
  "Client-Side Scripting: JavaScript is mainly used on the client side, meaning it runs in a user's web browser. It enables dynamic content, form validation, animations, and more.",
  "Event Handling: JavaScript lets you respond to user actions like clicks, inputs, and mouse movements.",
  "DOM Manipulation: You can use JavaScript to interact with the Document Object Model (DOM), which represents the structure of a web page.",
  "Asynchronous Operations: JavaScript supports asynchronous programming, allowing you to make network requests and handle responses without blocking the rest of your code.",
];
const typescript = [
  "TypeScript is a superset of JavaScript that adds static typing and additional features to the language. It is designed to address some of the challenges and limitations of JavaScript, particularly in larger and more complex projects. TypeScript code is compiled into standard JavaScript that can be executed in browsers or on server-side platforms.",
  "Static Typing: TypeScript introduces static typing, which allows you to define the types of variables, function parameters, and return values. This helps catch type-related errors during development.",
  "Type Annotations: You can explicitly annotate variables and functions with types to improve code clarity and maintainability.",
  "Interfaces and Classes: TypeScript supports object-oriented programming concepts, including interfaces, classes, and inheritance.",
  "Code Organization: TypeScript encourages the use of modules to better organize code and manage dependencies.",
];
const react = [
  "React is an open-source JavaScript library developed by Facebook (now maintained by Facebook and the community) for building user interfaces, particularly for web applications. React is designed to help developers create reusable and interactive UI components that efficiently update and render in response to changes in data.",
  "Component-Based Architecture: React encourages developers to break down the user interface into small, reusable components. Each component manages its own state and can be composed to build complex UIs.",
  "Virtual DOM: React uses a Virtual DOM (a lightweight in-memory representation of the actual DOM) to optimize the process of updating and rendering UI elements. When data changes, React calculates the minimal set of updates needed to reflect those changes in the real DOM, resulting in better performance.",
  "Declarative Syntax: React uses a declarative syntax, where you describe how your UI should look based on the data and let React handle the actual rendering. This approach makes it easier to reason about the application's behavior.",
  "JSX (JavaScript XML): JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It enables you to define UI components using a familiar syntax and integrates seamlessly with React.",
  "State and Props: React components can have two types of data: state and props. State represents mutable data that can change over time within a component, while props are immutable data passed from a parent component to its children.",
  "Lifecycle Methods: React components have lifecycle methods that are called at different stages of a component's existence, such as when it's created, updated, or removed. These methods provide hooks for performing actions like initialization, data fetching, and cleanup.",
  "Hooks: Introduced in React 16.8, hooks are functions that allow you to 'hook into' React state and lifecycle features from functional components. They simplify the management of state and side effects, making it easier to write reusable and testable code.",
  "Context: React Context provides a way to share data between components without having to pass props through every level of the component tree. It's useful for sharing global data, like themes or user authentication, across components.",
  "React Router: React Router is a popular library for handling routing and navigation in React applications. It allows you to create single-page applications with multiple views and URLs.",
];
const csharp = [
  "C# (pronounced 'C sharp') is a modern, object-oriented programming language developed by Microsoft. It was introduced in the early 2000s as part of the Microsoft .NET framework and has since become one of the key languages for building a wide range of applications, including desktop software, web applications, games, mobile apps, and more. C# is designed to be versatile, efficient, and easy to use, making it a popular choice among developers.",
  "Object-Oriented: C# is built around the principles of object-oriented programming (OOP). This means that you work with objects and classes, allowing you to model real-world entities and their behaviors in your code.",
  "Type Safety: C# is a statically typed language, which means that variables and expressions are assigned specific data types at compile time. This helps catch type-related errors before your program runs.",
  "Automatic Memory Management: C# uses a garbage collector to automatically manage memory, freeing developers from manual memory allocation and deallocation tasks. This helps prevent memory leaks and makes the language more secure.",
  "Language Features: C# provides a wide range of language features, including support for properties, events, delegates, lambdas, and more. These features enhance code readability, maintainability, and flexibility.",
  "Platform Independence: C# was originally designed to run on the Microsoft .NET platform. However, with the introduction of .NET Core (now known as .NET), C# applications can now run on various platforms, including Windows, macOS, and Linux.",
  "Integrated Development Environment (IDE): Microsoft provides Visual Studio, a powerful and feature-rich IDE for C# development. Visual Studio offers tools for code editing, debugging, testing, and more, making the development process efficient and productive.",
  "Versatility: C# can be used to build a wide range of applications, including:",
  "• Desktop Applications: Create Windows applications with graphical user interfaces (GUIs).",
  "• Web Applications: Build server-side logic for web applications using ASP.NET.",
  "• Mobile Apps: Develop cross-platform mobile apps using frameworks like Xamarin.",
  "• Games: C# is widely used for game development in conjunction with the Unity game engine.",
  "• Cloud Services: Create cloud-based applications using Azure services.",
];
const rust = [
  "Rust is a systems programming language that aims to provide the performance of low-level languages like C and C++ while also prioritizing memory safety, concurrency, and modern language design. It was developed by Mozilla and first released in 2010. Rust is designed to empower developers to write reliable, efficient, and safe code, particularly for systems-level and performance-critical applications.",
  "Memory Safety: One of Rust's standout features is its strong emphasis on memory safety. It enforces strict compile-time checks to prevent common programming errors like null pointer dereferences, buffer overflows, and data races, which are major sources of bugs and security vulnerabilities in other languages.",
  "Ownership and Borrowing: Rust introduces a unique ownership model that governs how memory is allocated and deallocated. Every value in Rust has a single 'owner,' and the language enforces strict rules for borrowing and sharing data to prevent data races and ensure safe concurrency.",
  "Lifetimes: Rust uses lifetimes to track how long references to data are valid. This helps the compiler ensure that references do not outlive the data they point to, preventing dangling references.",
  "Concurrency: Rust provides built-in concurrency features, including threads and message-passing concurrency, without the risk of data races. The ownership model and strict compile-time checks help catch concurrency issues at compile time.",
  "Trait System: Rust's trait system allows developers to define shared functionality across different types, similar to interfaces in other languages. This promotes code reuse and modular design.",
  "Pattern Matching: Rust offers powerful pattern matching capabilities, enabling developers to succinctly handle various cases and structures in their code.",
  "Zero-Cost Abstractions: Rust aims to provide high-level abstractions without sacrificing performance. It achieves this through a system of 'zero-cost abstractions,' where higher-level code is compiled into efficient low-level instructions.",
  "Cargo: Cargo is Rust's official package manager and build tool. It makes it easy to manage dependencies, compile code, and run tests, contributing to a seamless development experience.",
  "Community and Ecosystem: Rust has a vibrant and growing community with a strong focus on documentation, learning resources, and open-source projects. The Rust ecosystem includes libraries and frameworks for a wide range of applications, from web development to system programming.",
];
const docker = [
  "Docker is a platform and tool designed to make it easier to create, deploy, and run applications using containerization. Containerization is a technology that allows you to package an application and its dependencies into a single unit called a 'container.' Containers are isolated environments that can run consistently across different environments, such as development, testing, and production, without worrying about differences in underlying infrastructure.",
  "Images: An image is a lightweight, standalone, and executable software package that includes everything needed to run a piece of software, including code, runtime, system tools, system libraries, and settings. Images serve as the basis for containers.",
  "Containers: A container is an instance of an image that runs as a process on the host operating system. Containers are isolated from each other and from the host system, ensuring that an application in a container has its own runtime environment.",
  "Docker Engine: The Docker Engine is the core component of Docker. It's responsible for building, running, and managing containers. It consists of a server, a REST API, and a command-line interface (CLI) client.",
  "Dockerfile: A Dockerfile is a script that contains instructions for building a Docker image. It specifies a base image, adds software packages, configures settings, and more. Dockerfiles are used to create custom images tailored to specific application requirements.",
  "Registry: Docker images can be stored and shared in repositories called registries. Docker Hub is a popular public registry where you can find and share images. You can also set up private registries for more control over image distribution within your organization.",
  "Compose: Docker Compose is a tool for defining and running multi-container applications. It uses a YAML file to define the services, networks, and volumes needed for an application. Compose simplifies the process of managing complex applications composed of multiple interconnected containers.",
  "Swarm and Kubernetes: Docker Swarm and Kubernetes are orchestration tools that help manage the deployment, scaling, and operation of containers in a clustered environment. They provide features for load balancing, service discovery, automated scaling, and more.",
  "Portability and Consistency: Docker promotes consistency between development, testing, and production environments. Developers can work with the same container locally as what's running in production, reducing the 'it works on my machine' problem.",
];

export default function Page() {
  return (
    <main className={`${main} ${main_dark}`}>
      <Overlay />
      <h1 className="font-semibold text-center">Stack</h1>
      <p className="font-light text-center">
        This is not your mother&apos;s WordPress or Wix house. Our inclination
        is to utilize more performant tooling for better customer experiences.
      </p>
      <div className={`${flex}`}>
        <Image src="/js.svg" alt="javascript" height={96} width={96} priority />
        <InfoCard title="JavaScript" content={javascript} hidden={true} />
        <Image src="/ts.svg" alt="typescript" height={96} width={96} priority />
        <InfoCard title="TypeScript" content={typescript} hidden={true} />
        <Image src="/react.svg" alt="react" height={96} width={96} priority />
        <InfoCard title="React" content={react} hidden={true} />
        <Image src="/csharp.svg" alt="c#" height={96} width={96} priority />
        <InfoCard title="C#" content={csharp} hidden={true} />
        <Image src="/rust.svg" alt="rust" height={96} width={96} priority />
        <InfoCard title="Rust" content={rust} hidden={true} />
        <Image
          src="/docker.svg"
          alt="docker"
          height={96}
          width={256}
          priority
        />
        <InfoCard title="Docker" content={docker} hidden={true} />
      </div>
      <Logo />
      <NavGroup />
      <Monks />
    </main>
  );
}
