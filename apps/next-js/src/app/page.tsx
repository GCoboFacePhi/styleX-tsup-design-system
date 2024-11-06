import stylex from "@stylexjs/stylex";
import { FlexContainer } from "@ui/flex-container/FlexContainer";
// This is still broken. Figuring it out.
// import { varColors } from "@ui/theme/variables/colors.stylex";

const style = stylex.create({
  base: {
    backgroundColor: "sandybrown",
    // backgroundColor: {
    //   default: varColors.error400,
    //   ":hover": varColors.blue400,
    // },
  },
  text: {
    fontSize: '16px'
  }
});


export default function Home() {
  return (
    <main {...stylex.props(style.base)}>
      <p>This problem should be fixed in the next release.</p>
      <FlexContainer flexDirection="column" justifyContent="center" rowGap={2}>
        {/* <p>
          <code>varColors.error400</code> is <code>{varColors.error400}</code>
          but it resolves to <code>`--x1bcsovc`</code> in the StyleX compiler
          when used in the `app/next-app` package.
        </p> */}
        <p {...stylex.props(style.text)}>
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
