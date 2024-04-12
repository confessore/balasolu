import { Carousel } from "flowbite-react";

export default function ApplicationCarousel() {
    return (
        <>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel>
                    <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
                    <img src="https://images.unsplash.com/photo-1537861295351-76bb831ece99?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
                    <img src="https://images.unsplash.com/photo-1521241697111-a00acc5bedb2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
                    <img src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
                </Carousel>
            </div>
        </>
    );
}