//PACKAGE IMPORTS
import { useState } from "react";
import { ArrowCircleDown } from "@untitled-ui/icons-react";
import classNames from "classnames";

//INTERNAL IMPORTS
import "./lib/styles/HTCL.scss";
import "material-icons/iconfont/filled.css";
import "material-icons/iconfont/outlined.css";
import { Navigation, InformationPage } from "./bilderbuch/components";
import { HighTierIcon } from "./assets";
import {
  HtclLayout,
  DocumentCard,
  Accordion,
  AccordionGroup,
  Calendar,
  CheckBox,
  RadioBtn,
} from "./lib";

const App = () => {
  const [canvasOpen, setCanvasOpen] = useState<any>(
    localStorage.getItem("canvasOpen")
  );
  const [activeSection, setActiveSection] = useState<any>(
    localStorage.getItem("activeSection")
      ? localStorage.getItem("activeSection")
      : "null"
  );
  const [activeComponent, setActiveComponent] = useState<any>(
    localStorage.getItem("activeComponent")
      ? localStorage.getItem("activeComponent")
      : "null"
  );
  const [deviceSize] = useState<any>("unset");

  const [activeId, setActiveId] = useState("accord1");
  const [showPassword, setShowPassword] = useState(false);
  const [stepValue, setStepValue] = useState<any>(1);

  const year = new Date().getFullYear();

  return (
    <div className="pcl">
      {!canvasOpen && (
        <div
          className="glass box pointer fade"
          onClick={() => {
            setCanvasOpen(true);
            localStorage.setItem("canvasOpen", "true");
          }}
        >
          <img className="logo" src={HighTierIcon} />
          <div className="title">
            <div>
              <h1>High Tier Component Library</h1>
              <h2> Version {process.env.npm_package_version}</h2>
              <p className="copyright">
                High Tier Research and Development L.L.C <br /> © {year}
              </p>
            </div>
            <div className="enter">
              <ArrowCircleDown width={"48px"} height={"48px"} />
            </div>
          </div>
        </div>
      )}
      {canvasOpen && (
        <HtclLayout
          layoutVariant=""
          childrenA={
            <aside className="column-3 fixed top-0 z-1000 flex flex-column items-center content-center b-r-default p-30px h-100vh">
              <span className="flex flex-column italic">
                <h1 className="f-s-20px text-uppercase f-w-700 l-h-1_2em l-s-3_5px">
                  High Tier{" "}
                </h1>
                <h2 className="f-s-12px f-w-500 text-uppercase l-s-1px">
                  {" "}
                  Component Library
                </h2>
              </span>
              <Navigation
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                activeComponent={activeComponent}
                setActiveComponent={setActiveComponent}
              />
            </aside>
          }
          childrenB={
            <div className="column-9 bg-gray-2 absolute right-0 pb-50px">
              <div
                className={classNames(
                  "canvas glass-grey fade",
                  deviceSize !== "unset" && "canvas-full"
                )}
              >
                {activeComponent === "null" && activeSection === "null" && (
                  <InformationPage year={year} />
                )}
                {activeComponent === null && activeSection === null && (
                  <InformationPage year={year} />
                )}
              </div>
              <DocumentCard
                componentTitle="Accordions"
                componentSummary={`The accordion component is a graphical control element that
                can be used to display FAQ information, vertical or
                horizonial list items, in a grouping of common elements or as a single
                dropdown element. Each item can "expand" or hide and show
                content that is associated with a particular accordion
                element.`}
                version={"1.1.0"}
                datePublished={"12/30/2021"}
                dateUpdated={"10/21/2024"}
              >
                <div className="card p-30px">
                  <p className="mb-20px f-w-500">
                    {" "}
                    Ex. 1 - Single Accordion List Item{" "}
                  </p>
                  <br />
                  <Accordion
                    titleText="This is an example of a single accordion"
                    actionPosition="left"
                    accordId="accord0"
                  >
                    <div className="w-full pt-20px pl-1rem pointer">
                      <p>Hide / Show Operation</p>
                      <p>
                        The accordion component has an expansion action that
                        hides and shows content
                      </p>
                    </div>
                  </Accordion>
                </div>
                <br />
                <div className="card p-30px">
                  <p className="mb-20px f-w-500">
                    {" "}
                    Ex. 2 - Styled Accordion Items{" "}
                  </p>
                  <br />
                  <Accordion
                    titleText="This is an example of a single accordion"
                    actionPosition="left"
                    accordId="accord0"
                  >
                    <div className="w-full pt-20px pl-1rem pointer">
                      <p>Hide / Show Operation</p>
                      <p>
                        The accordion component has an expansion action that
                        hides and shows content
                      </p>
                    </div>
                  </Accordion>
                </div>
                <br />
                <div className="card p-30px">
                  <p className="mb-20px f-w-500"> Ex. 3 - Accordion Group </p>
                  <br />
                  <AccordionGroup
                    title="This is a test of a group title"
                    subTitle="This is a test of a group subtitle. It is a muted color by default"
                  >
                    <Accordion
                      type="group"
                      titleText="This is an example of an accordion group"
                      actionPosition="left"
                      accordId="accord1"
                      activeId={activeId}
                      setActiveId={setActiveId}
                    >
                      <p className="pt-20px pl-1rem">
                        Accordion expanded content for the first item{" "}
                      </p>
                    </Accordion>
                    <Accordion
                      type="group"
                      titleText="This is an example of an accordion group"
                      actionPosition="left"
                      accordId="accord2"
                      activeId={activeId}
                      setActiveId={setActiveId}
                    >
                      <p className="pt-20px pl-1rem">
                        Accordion expanded content for the second item{" "}
                      </p>
                    </Accordion>
                    <Accordion
                      type="group"
                      titleText="This is an example of an accordion group"
                      actionPosition="left"
                      accordId="accord3"
                      activeId={activeId}
                      setActiveId={setActiveId}
                    >
                      <p className="pt-20px pl-1rem">
                        Accordion expanded content for the third item{" "}
                      </p>
                    </Accordion>
                  </AccordionGroup>
                </div>
              </DocumentCard>
              <DocumentCard
                componentTitle="Calendar"
                componentSummary={`test...`}
                version={"1.1.0"}
                datePublished={"12/30/2021"}
                dateUpdated={"10/21/2024"}
              >
                <Calendar />
              </DocumentCard>
              <DocumentCard
                componentTitle="CheckBox"
                componentSummary={`test...`}
                version={"1.1.0"}
                datePublished={"12/30/2021"}
                dateUpdated={"10/21/2024"}
              >
                <CheckBox
                  text="Show Password"
                  classes="mx-auto pointer max-w-200px f-s-14px outline-none text-body"
                  checkBoxClasses="bg-white"
                  name="showPassword"
                  selected={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />
              </DocumentCard>
              <DocumentCard
                componentTitle="Radio Button"
                componentSummary={`test...`}
                version={"1.1.0"}
                datePublished={"12/30/2021"}
                dateUpdated={"10/21/2024"}
              >
                <div className="flex flex-row">
                  <div className="mb-2rem">
                    <RadioBtn
                      value={1}
                      selected={stepValue}
                      onChange={() => setStepValue(1)}
                      groupName="radios"
                    />
                  </div>
                  <div className="mb-2rem">
                    <RadioBtn
                      value={2}
                      selected={stepValue}
                      onChange={() => setStepValue(2)}
                      groupName="radios"
                    />
                  </div>
                  <div className="mb-2rem">
                    <RadioBtn
                      value={3}
                      selected={stepValue}
                      onChange={() => setStepValue(3)}
                      groupName="radios"
                    />
                  </div>
                  <div className="mb-2rem">
                    <RadioBtn
                      value={4}
                      selected={stepValue}
                      onChange={() => setStepValue(4)}
                      groupName="radios"
                    />
                  </div>
                </div>
              </DocumentCard>
            </div>
          }
        ></HtclLayout>
      )}
    </div>
  );
};

export default App;
