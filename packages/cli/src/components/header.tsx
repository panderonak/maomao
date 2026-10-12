function Header() {
  return (
    <box justifyContent="center" alignItems="center">
      <box
        flexDirection="row"
        justifyContent="center"
        gap={0.5}
        alignItems="center"
      >
        <ascii-font font="tiny" text="mao" color="gray" />
        <ascii-font font="tiny" text="mao" />
      </box>
    </box>
  );
}

export { Header };
