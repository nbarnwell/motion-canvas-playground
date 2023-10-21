
import {makeScene2D, Circle, Rect, Layout, vector2Signal} from '@motion-canvas/2d';
import {all, createRef, easeInCubic, easeInQuad, easeOutCubic, waitFor, useLogger} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const logger = useLogger();
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
      x={300}
      height={400}
      width={100}
      fill={'blue'}
      direction={'column'}
      padding={10}>
    </Rect>
    </>
  )
  
  for (var i = 0; i < 1; i++) {
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

    let mover = newCircle().clone()
    view.add(mover)
    mover.absolutePosition(newCircle().absolutePosition())
    mover.remove()
    view.add(mover)

    newCircle().opacity(0)
    newCircle().remove()
    rect2().insert(newCircle(), 0)

    yield* mover.absolutePosition(newCircle().absolutePosition(), 2)

    mover.remove()

    newCircle().opacity(1)
  }

});
