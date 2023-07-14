import './styles.css';

import { useState } from 'react';
import {
  IoCameraOutline,
  IoChatbubbleOutline,
  IoHomeOutline,
  IoPersonOutline,
  IoSettingsOutline,
} from 'react-icons/io5';

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState(0);
  return (
    <div className={`navigation${isOpen ? ' active' : ''}`}>
      <div
        className="menuToogle"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      <ul>
        <li
          className={`list${item === 1 ? ' active' : ''}`}
          onClick={() => setItem(1)}
        >
          <a>
            <span
              className="icon"
              style={{ '--clr': item === 1 ? '#f44336' : '' } as any}
            >
              <IoHomeOutline />
            </span>
            <span className="text">Home</span>
          </a>
        </li>

        <li
          className={`list${item === 2 ? ' active' : ''}`}
          onClick={() => setItem(2)}
        >
          <a>
            <span
              className="icon"
              style={{ '--clr': item === 2 ? '#ffa117' : '' } as any}
            >
              <IoPersonOutline />
            </span>
            <span className="text">About</span>
          </a>
        </li>

        <li
          className={`list${item === 3 ? ' active' : ''}`}
          onClick={() => setItem(3)}
        >
          <a>
            <span
              className="icon"
              style={{ '--clr': item === 3 ? '#0fc70f' : '' } as any}
            >
              <IoChatbubbleOutline />
            </span>
            <span className="text">Messages</span>
          </a>
        </li>

        <li
          className={`list${item === 4 ? ' active' : ''}`}
          onClick={() => setItem(4)}
        >
          <a>
            <span
              className="icon"
              style={{ '--clr': item === 4 ? '#2196f3' : '' } as any}
            >
              <IoCameraOutline />
            </span>
            <span className="text">Photos</span>
          </a>
        </li>

        <li
          className={`list${item === 5 ? ' active' : ''}`}
          onClick={() => setItem(5)}
        >
          <a>
            <span
              className="icon"
              style={{ '--clr': item === 5 ? '#b145e9' : '' } as any}
            >
              <IoSettingsOutline />
            </span>
            <span className="text">Settings</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Index;
