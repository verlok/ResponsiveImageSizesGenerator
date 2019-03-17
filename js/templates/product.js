export const productTemplate = product => `<li>
    <img
        src="https://via.placeholder.com/305"
        srcset="
            https://via.placeholder.com/305?text=01-305w.jpg 305w,
            https://via.placeholder.com/610?text=01-610w.jpg 610w
        "
        sizes="(min-width: 1280px) 305px, 50vw"
        alt="Image 01"
    />
    <div class="title">${product.name}</div>
</li>`;
