const main = `
class :className extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className=":className">
    
      </div>
    )
  }
}
:className.propTypes = {
}
`;

const functional = `
const :className = ():ReactElement => {
  return (
    <div className=":className">
    </div>
  )
}
:className.propTypes = {
}
`;

const reducer = `
import { createContext } from 'react';
import {
  I:classNameInitialState,
  I:classNameContext,
  IAction,
} from '@smart/front-common';

import { OPEN_MODAL, CLOSE_MODAL } from './actions';

export const initialState: I:classNameInitialState = {
  open: false,
};
export const Context = createContext<I:classNameContext | undefined>(undefined);

export default function Reducer(state: I:classNameInitialState, action: IAction) {
      default:
        throw new Error('No action found');
    }
`;

const provider = `
import React, { useReducer, useContext, ReactElement, ReactNode } from 'react';
import { mock:classNameData, I:classNameContext } from '@smart/front-common';
import { } from './actions';
import reducer, { Context, initialState } from './reducer';

interface IProvider {
    children: ReactNode;
  }
  
  export default function Provider({ children }: IProvider): ReactElement {
    const [state, dispatch] = useReducer(reducer, {
      ...initialState,
    });
  

    return (
      <Context.Provider
        value={{
          ...state,
          data: mockBranchData,
        }}
      >
        {children}
      </Context.Provider>
    );
  }
  export function useProvider(): IBranchContext {
    const context = useContext(Context);
  
    if (context === undefined) {
      throw new Error(
        'use:classNameProvider must be used within a :classNameProvider'
      );
    }
  
    return context;
  }
`;

const imports = {
  react: "import React, {ReactElement} from 'react';",
  stylesheet: "import './styles.ts';",
};

const exported = {
  default: "export default :className;",
};

module.exports = {
  main: main,
  imports: imports,
  exported: exported,
  functional: functional,
  reducer: reducer,
  provider,
};
