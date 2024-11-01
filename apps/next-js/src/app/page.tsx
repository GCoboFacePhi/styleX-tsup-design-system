import stylex from "@stylexjs/stylex";
import { FlexContainer } from "@ui/flex-container/FlexContainer";
// This is still broken. Figuring it out.
// import { varColors } from "@ui/theme/variables/colors.stylex";
import styles from "./page.module.css";

const style = stylex.create({
  base: {
    fontSize: "2rem",
    color: "white",
    backgroundColor: {
      default: "red",
      ":hover": "blue",
    },
  },
});

export default function Home() {
  return (
    <main className={styles.main}>
      <FlexContainer className={style.base}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facere
          dolor rem autem eos earum facilis hic nihil unde praesentium
          molestias, sit perspiciatis expedita? Ducimus, tenetur placeat!
          Quibusdam, dolorum ea. Fugit architecto quos quo exercitationem eum
          excepturi quibusdam consequuntur, vitae doloremque mollitia magni
          natus fugiat odit reprehenderit nemo corporis vel quas tempora aperiam
          sint blanditiis voluptate dolores modi. Atque dolorum quae eveniet
          laudantium suscipit repudiandae tenetur, recusandae mollitia excepturi
          expedita in officiis eius ea quisquam? Odio consequatur nulla illum
          ducimus maiores sit! Deserunt doloremque quibusdam voluptates, eos
          incidunt blanditiis sapiente ex aliquid ab totam, harum in optio
          numquam beatae nobis.
        </p>
      </FlexContainer>
    </main>
  );
}
