import { Guess } from '../../Types/Guess'
import KeyboardButton from './KeyboardButton'

interface Props {
  inputHandler: (key: string) => void
  deletionHandler: () => void
  enterHandler: () => void
  guesses: Guess[]
}

export default function Keyboard({
  inputHandler,
  deletionHandler,
  enterHandler,
  guesses,
}: Props) {
  return (
    <div className="flex justify-center mt-8 font-mono font-bold min-w-0 p-2">
      <div className="h-[190px] max-w-md space-y-1 text-2xl min-w-0">
        <div className="flex flex-row space-x-1 justify-center min-w-0">
          <KeyboardButton
            onClick={() => inputHandler('Q')}
            value={'Q'}
            guesses={guesses}
          />
          <KeyboardButton
            onClick={() => inputHandler('W')}
            value={'W'}
            guesses={guesses}
          />
          <KeyboardButton
            onClick={() => inputHandler('E')}
            value={'E'}
            guesses={guesses}
          />
          <KeyboardButton
            onClick={() => inputHandler('R')}
            value={'R'}
            guesses={guesses}
          />
          <KeyboardButton
            onClick={() => inputHandler('T')}
            value={'T'}
            guesses={guesses}
          />
          <KeyboardButton
            onClick={() => inputHandler('Z')}
            value={'Z'}
            guesses={guesses}
          />
          <KeyboardButton
            onClick={() => inputHandler('U')}
            value={'U'}
            guesses={guesses}
          />
          <KeyboardButton
            onClick={() => inputHandler('I')}
            value={'I'}
            guesses={guesses}
          />
          <KeyboardButton
            onClick={() => inputHandler('O')}
            value={'O'}
            guesses={guesses}
          />
          <KeyboardButton
            onClick={() => inputHandler('P')}
            value={'P'}
            guesses={guesses}
          />
        </div>
        <div className="flex flex-row space-x-1 justify-center min-w-0">
          <KeyboardButton
            onClick={() => inputHandler('A')}
            value={'A'}
            guesses={guesses}
          />
          <KeyboardButton
            onClick={() => inputHandler('S')}
            value={'S'}
            guesses={guesses}
          />
          <KeyboardButton
            onClick={() => inputHandler('D')}
            value={'D'}
            guesses={guesses}
          />
          <KeyboardButton
            onClick={() => inputHandler('F')}
            value={'F'}
            guesses={guesses}
          />
          <KeyboardButton
            onClick={() => inputHandler('G')}
            value={'G'}
            guesses={guesses}
          />
          <KeyboardButton
            onClick={() => inputHandler('H')}
            value={'H'}
            guesses={guesses}
          />
          <KeyboardButton
            onClick={() => inputHandler('J')}
            value={'J'}
            guesses={guesses}
          />
          <KeyboardButton
            onClick={() => inputHandler('K')}
            value={'K'}
            guesses={guesses}
          />
          <KeyboardButton
            onClick={() => inputHandler('L')}
            value={'L'}
            guesses={guesses}
          />
        </div>
        <div className="flex flex-row space-x-1 justify-center min-w-0">
          <KeyboardButton
            onClick={() => inputHandler('Y')}
            value={'Y'}
            guesses={guesses}
          />
          <KeyboardButton
            onClick={() => inputHandler('X')}
            value={'X'}
            guesses={guesses}
          />
          <KeyboardButton
            onClick={() => inputHandler('C')}
            value={'C'}
            guesses={guesses}
          />
          <KeyboardButton
            onClick={() => inputHandler('V')}
            value={'V'}
            guesses={guesses}
          />
          <KeyboardButton
            onClick={() => inputHandler('B')}
            value={'B'}
            guesses={guesses}
          />
          <KeyboardButton
            onClick={() => inputHandler('N')}
            value={'N'}
            guesses={guesses}
          />
          <KeyboardButton
            onClick={() => inputHandler('M')}
            value={'M'}
            guesses={guesses}
          />
        </div>
        <div className="flex justify-center space-x-1 min-w-0">
          <button
            className="font-bold h-10 aspect-video rounded-md font-mono bg-gray-300"
            onClick={() => enterHandler()}
          >
            ✓
          </button>
          <KeyboardButton
            onClick={() => inputHandler('Ü')}
            value={'Ü'}
            guesses={guesses}
          />
          <KeyboardButton
            onClick={() => inputHandler('Ö')}
            value={'Ö'}
            guesses={guesses}
          />
          <KeyboardButton
            onClick={() => inputHandler('Ä')}
            value={'Ä'}
            guesses={guesses}
          />
          <KeyboardButton
            onClick={() => inputHandler('ß')}
            value={'ß'}
            guesses={guesses}
          />
          <button
            className="font-bold h-10 aspect-video rounded-md font-mono bg-gray-300"
            onClick={() => deletionHandler()}
          >
            ←
          </button>
        </div>
      </div>
    </div>
  )
}
