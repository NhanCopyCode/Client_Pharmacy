export default function RenderWithProps({ component: Component, ...rest }) {
	return <Component {...rest} />;
}
