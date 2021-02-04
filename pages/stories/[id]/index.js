import React from "react";
import { useRouter } from "next/router";

const story = ({ query }) => {
  const router = useRouter();
  console.log(query);
  const { id, storyId } = query;

  return (
    <div className="m-8 h-auto max-w-screen-xl flex flex-col w-xl2 bg-white rounded">
      <div className="py-3 px-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-semibold">Story Title</h1>
            <h1 className="text-1xl font-semibold">Written by Author</h1>
          </div>
          <div className="text-blue-500 md:text-2xl p-1 border-2 border-blue-400">
            <a href="/"> 🔙 Return</a>
          </div>
        </div>
        <p className="text-base mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          dignissim nisl vitae neque mollis, quis condimentum diam vestibulum.
          Duis in vestibulum orci, eget lobortis leo. Suspendisse varius non
          magna sed varius. Cras lobortis elementum eros, eu vehicula lorem
          iaculis eget. In et libero est. Quisque nisi dolor, varius vitae
          malesuada in, ultricies sit amet neque. Integer volutpat pellentesque
          consequat. Aliquam nulla leo, cursus at lacinia sit amet, ultrices
          vitae nisl. Donec ultrices mattis tortor in feugiat. Donec tristique
          porttitor nisi, sed sollicitudin mauris maximus vitae. Maecenas semper
          purus ac ex gravida elementum. Nunc sagittis arcu in lacus tincidunt
          consectetur non non massa. Donec pulvinar aliquet nisi, eget
          ullamcorper lorem faucibus non. Duis suscipit, purus nec molestie
          porta, eros diam consequat mi, euismod molestie mauris elit non
          mauris. Nunc et eros a arcu dapibus vestibulum. Vestibulum et
          vulputate nisl. Nunc semper, nunc sed accumsan suscipit, augue lorem
          gravida lorem, convallis blandit justo sem et odio. Sed aliquam neque
          ac quam varius euismod eget consectetur nunc. Donec at risus
          hendrerit, facilisis lacus sed, consectetur ante. Nam ullamcorper
          feugiat metus, vel dignissim elit venenatis ac. Fusce ullamcorper dui
          ultricies, imperdiet sem sed, aliquet sapien. Phasellus sodales, neque
          id consectetur maximus, urna ante blandit elit, aliquet congue elit
          mauris sit amet quam. Aliquam neque tortor, congue sed tellus quis,
          congue placerat orci. Maecenas vehicula sagittis mi quis bibendum.
          Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Quisque cursus nulla non turpis imperdiet
          ultricies. Nam pellentesque sollicitudin turpis, sed ullamcorper nulla
          pharetra vitae. Mauris feugiat, ex sed tincidunt rhoncus, diam tortor
          luctus enim, non aliquam dolor massa ac eros. Maecenas convallis leo
          massa, sit amet venenatis arcu gravida id. Quisque nec vulputate
          magna. Fusce in enim neque. Etiam eget diam ut ex eleifend tincidunt.
          Etiam ac elit id ipsum pretium egestas. Ut blandit, leo non finibus
          feugiat, orci odio porttitor enim, quis blandit purus diam vitae
          purus. Mauris nunc enim, consequat ut ultrices id, scelerisque sed
          est. Donec a tortor vitae ante aliquam sodales. Nulla eu congue ex.
          Integer ultricies cursus tortor, a pellentesque justo consectetur
          vitae. Praesent quis velit tellus. Aliquam molestie eu leo at
          ullamcorper. Donec laoreet in augue sed finibus. Mauris dignissim ante
          urna, sit amet maximus felis commodo ut. In volutpat neque id dui
          commodo, ac sodales nisi varius. Nullam convallis commodo maximus.
          Vestibulum tempus nisi massa, pretium aliquam tortor egestas a. Nulla
          a semper nisi, ac ultrices velit. Pellentesque lectus turpis, dictum
          vel erat eu, gravida euismod justo. In et magna ac diam scelerisque
          vehicula. Vestibulum fermentum ut nulla sit amet faucibus. Vestibulum
          vestibulum neque varius, rutrum libero sit amet, feugiat nunc.
          Suspendisse laoreet mauris a risus tincidunt, et iaculis mauris porta.
          Maecenas odio mi, ultrices a odio eleifend, congue dictum quam. Nullam
          elit quam, sagittis ut ligula nec, posuere viverra libero. Etiam sit
          amet arcu vel nisi laoreet facilisis. Vivamus at euismod ante. In id
          rutrum turpis, vel dignissim ex. Aliquam volutpat lacus eu est
          volutpat, et porta risus sodales. Fusce lacinia eget nisl non
          imperdiet. Praesent aliquet, odio sed cursus viverra, urna augue
          interdum quam, nec gravida nibh nisl sed enim. Pellentesque lectus
          ipsum, suscipit fermentum dolor sit amet, commodo elementum ipsum.
          Integer hendrerit, libero cursus vestibulum commodo, metus urna
          tincidunt ante, sed dapibus nunc nunc quis velit. Nullam a risus
          imperdiet, molestie ipsum sed, consectetur lacus. Ut commodo congue
          faucibus. Nam mattis non quam vitae posuere.
        </p>
        <div>This is a story # {id}</div>
        <div>{router.query.storyId}</div>
      </div>
    </div>
  );
};

story.getInitialProps = ({ query }) => {
  return { query };
};

export default story;
