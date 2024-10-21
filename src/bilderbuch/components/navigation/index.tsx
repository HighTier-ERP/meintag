import { useState } from "react";
import { HighTierIcon } from "../../../assets";
import {
  ArrowCircleDown,
  ArrowCircleRight,
  Menu04,
  XCircle,
} from "@untitled-ui/icons-react";

const NavLink = ({
  title,
  setActiveComponent,
  activeComponent,
  setActiveSection,
  activeSection,
  subcomponents,
}: any) => {
  const [activeDropdown, setActiveDropdown] = useState(false);
  return (
    <>
      <div className="flex pointer" style={{ fontSize: "12px" }}>
        <p
          onClick={() => {
            setActiveSection(title);
            localStorage.setItem("activeSection", title);
            localStorage.setItem("activeComponent", "null");
            setActiveComponent(null);
            setActiveDropdown(false);
          }}
        >
          {title}
        </p>
        {activeSection === title ? (
          <XCircle
            width={"24px"}
            height={"24px"}
            onClick={() => {
              setActiveSection(null);
              localStorage.setItem("activeSection", "null");
              localStorage.setItem("activeComponent", "null");
              setActiveComponent(null);
              setActiveDropdown(false);
            }}
          />
        ) : (
          <ArrowCircleDown
            width={"24px"}
            height={"24px"}
            onClick={() => {
              setActiveSection(title);
              localStorage.setItem("activeSection", title);
              setActiveComponent(null);
              localStorage.setItem("activeComponent", "null");
              setActiveDropdown(true);
            }}
          />
        )}
      </div>
      {activeSection === title && activeDropdown && (
        <>
          {subcomponents?.map((component: any, i: any) => {
            return (
              <div className="sublink" key={i}>
                <p>{component.title}</p>
                {activeComponent === component.title ? (
                  <XCircle
                    width={"24px"}
                    height={"24px"}
                    onClick={() => {
                      setActiveComponent(null);
                      localStorage.setItem("activeComponent", "null");
                    }}
                  />
                ) : (
                  <ArrowCircleRight
                    width={"24px"}
                    height={"24px"}
                    onClick={() => {
                      setActiveComponent(component.title);
                      localStorage.setItem("activeComponent", component.title);
                    }}
                  />
                )}
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

const Navigation = ({
  activeComponent,
  setActiveComponent,
  activeSection,
  setActiveSection,
  config,
}: any) => {
  const [menuOpen, setMenuOpen] = useState<any>(false);
  return (
    <div className="glass-grey navbar fade">
      <div className="full-width">
        <div className="full-width nav-top">
          <div
            className="hide-for-desktop pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu04 />
          </div>
        </div>
        <nav>
          <div className="show-for-desktop"></div>
          <div className="hide-for-desktop">
            {menuOpen && (
              <>
                <br />
                <br />
                {config.map((item: any, i: any) => {
                  return (
                    <NavLink
                      key={i}
                      title={item.section}
                      subcomponents={item.components}
                      setActiveComponent={setActiveComponent}
                      activeComponent={activeComponent}
                      activeSection={activeSection}
                      setActiveSection={setActiveSection}
                    />
                  );
                })}
              </>
            )}
          </div>
        </nav>
      </div>
      <p> Total Components: </p>
    </div>
  );
};

export default Navigation;
