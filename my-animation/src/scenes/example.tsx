
import {makeScene2D, Circle, Rect, Layout} from '@motion-canvas/2d';
import {all, createRef, easeInCubic, easeInQuad, easeOutCubic, waitFor} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const rect = createRef<Rect>();
  const circle = createRef<Circle>();

  view.add(
    <Rect layout
      ref={rect}
      x={-300}
      height={400}
      direction={'column'}>
    </Rect>
  )
  
  rect().add(
    <Circle 
      ref={circle}
      fill={'red'}
      opacity={0}
      width={200}
      height={200}
      />
  )

  yield* circle().opacity(1, 2, easeOutCubic)
});
