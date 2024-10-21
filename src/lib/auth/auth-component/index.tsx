//PACKAGE IMPORTS
import { useContext, useState, useEffect } from "react";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";

//INTERNAL IMPORTS
import { Input } from "../../inputs";
import { Button } from "../../utilities";
import { MotionDiv } from "../../layout";

//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
//Auth page for HTCL. Is Site configurable.
/*----------------------------------------------------------------------------*/

const FadeUp = {
  hidden: { opacity: 0, y: 20, x: 0 },
};

const PageTitle = ({ hidePageTitle, authMessaging, authComponent }: any) => {
  return (
    !hidePageTitle && (
      <div
        className={classNames(
          authComponent === "login" ? "pb-200px" : "mb-20px"
        )}
      >
        <h1 className="py-20px">
          {authComponent === "login" ? "Login" : "Sign Up"}
        </h1>
        <p>{authMessaging}</p>
      </div>
    )
  );
};

const Inputs = ({
  email,
  handleEmail,
  password,
  handlePassword,
  showPasswordInput,
}: any) => {
  return (
    <>
      <Input
        placeholder="Email"
        name="email"
        type="email"
        autoComplete="off"
        value={email}
        onChange={handleEmail}
        classes="mb-20px"
      />

      {showPasswordInput ? (
        <>
          <Input
            placeholder="Password"
            name="password"
            type="password"
            autoComplete="off"
            value={password}
            onChange={handlePassword}
            classes="mb-20px"
          />
          <Button
            classes="mt-30px bg-black text-white h-40px px-30px w-200px br-full flex items-center pointer f-w-800 bw-1px"
            label="Login"
            type="submit"
            disabled={
              email === null ||
              password === null ||
              email === "" ||
              password === ""
            }
          />
        </>
      ) : (
        <Button
          classes="my-30px bg-black text-white h-40px px-30px w-200px br-full flex items-center pointer f-w-800 bw-1px"
          label="Send Magic Link"
          type="submit"
          disabled={email === null || email === "" || !email.length}
        />
      )}
    </>
  );
};

const AlertContent = ({ message }: any) => {
  return message.content ? (
    <span className="alert-content flex flex-row justify-center">
      <p
        className={classNames(
          "py-30px mb-10px border",
          message.type === "error" ? "text-pink" : "text-green",
          message.type === "error" ? "border-pink" : "border-green"
        )}
      >
        {message.content}
      </p>
    </span>
  ) : null;
};

const ShowPasswordInput = ({
  showPasswordInput,
  setPassword,
  setShowPasswordInput,
}: any) => {
  return (
    <div
      className="pointer pb-20px"
      onClick={() => {
        if (showPasswordInput) setPassword("");
        setShowPasswordInput(!showPasswordInput);
      }}
    >
      <span>
        Sign in with <u>{showPasswordInput ? "magic link" : "password"}</u>.
      </span>
    </div>
  );
};

const SignUpAnchor = ({ router, classes }: any) => {
  function goToOnboading() {
    router.push("/signup");
  }
  return (
    <span className="w-full" onClick={() => goToOnboading()}>
      <div className={classes}>
        Need an account? <br />
        <p className="f-w-600 f-s-18px">Sign Up</p>
      </div>
    </span>
  );
};

const WelcomeContent = ({ welcomeMessage, welcomeMessageSubContent }: any) => {
  return (
    <>
      <h2 className="pt-20px">{welcomeMessage}</h2>
      <h3 className="py-20px">{welcomeMessageSubContent}</h3>
    </>
  );
};

const Auth = ({
  backgroundImageRef,
  sessionContext,
  updateStatus,
  useUser,
  router,
  authMessaging,
  layoutFormat,
  hidePageTitle,
  welcomeMessage,
  welcomeMessageSubContent,
  maxWidthClass,
}: any) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(sessionContext);
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [message, setMessage] = useState({ type: "", content: "" });

  const { user, signIn } = useUser();
  const [userStatus] = useState("ONLINE");

  const [ref, inView] = useInView();

  function handleEmail(event: any) {
    setEmail(event.target.value);
  }

  function handlePassword(event: any) {
    setPassword(event.target.value);
  }

  const handleSignin = async (e: any) => {
    e.preventDefault();

    setMessage({});

    setIsLoggedIn(true);

    const { error, user } = await signIn({ email, password });

    if (user) {
      await updateStatus(user, userStatus);
    }

    if (error) {
      setMessage({ type: "error", content: error.message });
      setIsLoggedIn(false);
    }
    if (!password) {
      setMessage({
        type: "note",
        content: "Check your email for the magic link.",
      });
    }
  };

  useEffect(() => {
    if (user && isLoggedIn) {
      router.push("/dashboard");
    }
  }, [user, router, isLoggedIn, inView]);

  return layoutFormat === "row" ? (
    <MotionDiv
      componentRef={ref}
      custom={0.4}
      initialValue="hidden"
      variant={FadeUp}
      classes="bg-white h-full"
    >
      <div
        className="w-100 mx-auto px-30px pt-30px pb-80px font-work-sans h-full"
        style={{
          backgroundImage: `url(${backgroundImageRef})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-column flex-md-row">
          <div className="column-7 px-0 h-full">
            <form onSubmit={handleSignin} className="flex min-h-680px h-full">
              <div
                className={classNames(
                  maxWidthClass,
                  "flex flex-column mx-auto w-full pt-100px pt-80px-md-down"
                )}
              >
                <AlertContent message={message} />

                <WelcomeContent
                  welcomeMessage={welcomeMessage}
                  welcomeMessageSubContent={welcomeMessageSubContent}
                />

                <ShowPasswordInput
                  setPassword={setPassword}
                  setShowPasswordInput={setShowPasswordInput}
                  showPasswordInput={showPasswordInput}
                />

                <Inputs
                  email={email}
                  handleEmail={handleEmail}
                  password={password}
                  handlePassword={handlePassword}
                  showPasswordInput={showPasswordInput}
                />

                <SignUpAnchor
                  router={router}
                  classes="pointer my-20px relative bottom-10px py-20px px-30px bg-black-1 br-8px w-full text-decoration-none text-black flex flex-column none-md-up"
                />
              </div>
            </form>
          </div>
          <div className="column-5 h-full flex flex-column items-center relative none-md-down">
            <div className="min-h-680px pt-200px mt-20px br-24px w-full px-30px bg-yellow-1">
              <PageTitle
                hidePageTitle={hidePageTitle}
                authMessaging={authMessaging}
                authComponent="Logins"
              />
              <SignUpAnchor
                router={router}
                classes="pointer my-20px relative bottom-10px py-20px px-30px bg-black-1 br-8px w-full text-decoration-none text-black flex flex-column"
              />
            </div>
          </div>
        </div>
      </div>
    </MotionDiv>
  ) : (
    <MotionDiv
      componentRef={ref}
      custom={0.4}
      initialValue="hidden"
      variant={FadeUp}
      classes="bg-white h-full"
    >
      <div
        className="w-100 mx-auto px-30px py-80px h-full"
        style={{
          backgroundImage: `url(${backgroundImageRef})`,
          backgroundSize: "cover",
        }}
      >
        <div
          className={classNames(
            maxWidthClass,
            "br-24px flex flex-column items-center mt-20px relative mx-auto none-md-dow p-50px bg-yellow-1 box-shadow"
          )}
        >
          <AlertContent message={message} />
          <PageTitle
            hidePageTitle={hidePageTitle}
            authMessaging={authMessaging}
            authComponent={undefined}
          />
          <form
            onSubmit={handleSignin}
            className="flex flex-column w-full bg-black-1 br-8px pt-30px pb-20px px-50px"
          >
            <WelcomeContent
              welcomeMessage={welcomeMessage}
              welcomeMessageSubContent={welcomeMessageSubContent}
            />

            <ShowPasswordInput
              setPassword={setPassword}
              setShowPasswordInput={setShowPasswordInput}
              showPasswordInput={showPasswordInput}
            />

            <Inputs
              email={email}
              handleEmail={handleEmail}
              password={password}
              handlePassword={handlePassword}
              showPasswordInput={showPasswordInput}
            />
          </form>
          <SignUpAnchor
            router={router}
            classes="pointer mt-30px relative bottom-0px py-20px px-50px bg-black-1 br-8px w-full text-decoration-none text-black flex flex-column"
          />
        </div>
      </div>
    </MotionDiv>
  );
};

export default Auth;
