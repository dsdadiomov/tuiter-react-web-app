import Classes from "./classes";
import JavaScript from "./java-script";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoItem from "./todo/todo-item";
import TodoList from "./todo/todo-list";

function Assignment3() {
    return (
      <div>
        <h1>Assignment 3</h1>
        <TodoItem/>
        <TodoList/>
        <Styles />
        <Classes/>
        <ConditionalOutput/>
        <JavaScript/>
      </div>
    );
   }
   export default Assignment3;