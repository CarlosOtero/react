import React from 'react'
import Styles from './icon-styles.scss'

export enum IconName {
  thumbDown = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAMAAABsDg4iAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAAEgAAAAA9nQVdAAAAWlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////9ZMre9AAAAHXRSTlMABAUiKjFCSV5kcXSAj5mbsbXJzNLj6O71+Pv8/SrZNWIAAABeSURBVBjTbc9JDoAgEAXR74DziLPS97+mCWBsQtfy7QpAMp7kenQOzEQAavrTAFlcGRqPBfE8TgJmRsCeBNwlJAk3CctAj+/INjhswFusdYGlV2xQgqESDOqODWi5vc+VF8/v0QrTAAAAAElFTkSuQmCC',
  thumbUp = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAAEgAAAAA9nQVdAAAA0klEQVQ4EWNgIAH8//+/AYhLSNCCWynUMCD1/zcQG+BWSYQMkmEgA0Egjght2JUANYO8iQ4MsasmIAo0BZthP4DirAS0YkrjMAzk0tOYqgmIADUVgnTiADPxakfStAWmECj2DkmcWOYjoEJPRpBqmEGMQABiI4vB5IikH1PbQAYmIm0mVtlLahu4nJpe/gf0hho1XbgVGKd3qWngRFBA4/LyX6AcKZZdBbpOB2QgLk1nQJIkgElwtaBEDAXIOUULKHYSiP/CJHHQX4Hic4CYBWYgADx8PyqFiuhJAAAAAElFTkSuQmCC'
}

type Props = {
  iconName: IconName
  className?: string
}

const Icon: React.FC<Props> = ({ iconName, className }: Props) => {
  const iconColor = iconName === IconName.thumbDown ? Styles.red : Styles.green

  return (
    <div className={[Styles.iconWrap, iconColor, className].join(' ')}>
      <img data-testid="icon" className={Styles.icon} src={ iconName } />
    </div>
  )
}

export default Icon
