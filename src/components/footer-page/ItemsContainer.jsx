import Item from "./Item";
import SocialIcons from "./SocialIcons";
import { About, Treatment, Other, Icons } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 cursor-pointer border-b-2 mx-5 border-b-white border-0">
      <Item Links={About} title="About Vitalitas Medical " />
      <Item Links={Treatment} title="Treatment" />
      <Item Links={Other} title="Other" />
      <SocialIcons Icons={Icons} title="Join Us" />
    </div>
  );
};

export default ItemsContainer;
