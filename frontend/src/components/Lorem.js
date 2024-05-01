const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem ipsum dolor sit amet consectetur adipiscing elit Sed eleifend sapien eget euismod rhoncus nibh nibh condimentum lacus eu dignissim ipsum elit et neque Praesent facilisis ligula ac euismod ornare odio ante condimentum diam et ultricies urna mi quis felis Pellentesque est sapien tincidunt nec sodales non congue ac nunc Quisque mauris nisi faucibus id faucibus sit amet euismod non libero Etiam at tempor turpis Morbi sem enim sagittis a congue lacinia varius sed mauris Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Proin vestibulum sodales libero ac molestie Nulla hendrerit nisi ultrices orci sodales egestas Nullam iaculis dui ut neque placerat varius quis quis purus Aenean lobortis semper tellus vitae laoreet nunc facilisis maximus Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Curabitur at sapien ut metus ultrices fermentum Suspendisse turpis risus ullamcorper sed turpis a imperdiet condimentum est Mauris posuere diam non gravida maximus dolor nisl convallis nulla ac molestie velit velit vitae ipsum Aliquam lectus urna ullamcorper et purus vel commodo aliquet massa";
const Lorem = ({word = 60,className = ""}) => {
    const words = lorem.split(" ");
    words.length = word;
    return (
        <p className={`mb-3 ${className}`}>
            {words.map((val,i,_) => " " + val)}.
        </p>
    );
}

export default Lorem;