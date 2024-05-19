
import {
    JsonView,
    collapseAllNested,
    defaultStyles,
} from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";

export default function JsonViewer({ schema }) {
    return (
        <JsonView
            data={schema}
            clickToExpandNode={true}
            shouldExpandNode={collapseAllNested}
            style={defaultStyles}
        />
    );
}
