import { Widget } from '../widget'

// TODO: contains the button API. rendering engine <-> SDK
interface ButtonOptions {
  children: any
  danger?: boolean
}

export class Button extends Widget<ButtonOptions> {
  constructor(options: ButtonOptions) {
    super(options)
  }
}
