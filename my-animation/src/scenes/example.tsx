
import {makeScene2D, Circle, Rect, Layout} from '@motion-canvas/2d';
import {all, createRef, easeInCubic, easeInQuad, easeOutCubic, waitFor} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const rect1 = createRef<Rect>();
  const rect2 = createRef<Rect>();

  view.add(
    <>
    <Rect layout
      ref={rect1}
      x={-300}
      height={400}
      width={100}
      fill={'blue'}
      direction={'column'}
      padding={10}>
    </Rect>
    <Rect layout
      ref={rect2}
      height={400}
      width={100}
      fill={'blue'}
      direction={'column'}
      padding={10}>
    </Rect>
    </>
  )
  
  for (var i = 0; i < 5; i++) {
    yield* waitFor(0.25)

    const newCircle = createRef<Circle>()
    rect1().add(
      <Circle 
        ref={newCircle}
        fill={'red'}
        width={20}
        height={20}
        />
    )

    yield* waitFor(0.25)

    newCircle().remove()

    rect2().insert(newCircle(), 0)
  }

});
