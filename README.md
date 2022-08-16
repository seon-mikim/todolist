###3주차 팀과제 

Q.양방향 바인딩은 무엇일까요? 
 양방향 바인딩을 사용하는 경우 리렌더링이 어떻게 이루어질 지 그려보세요.
 (부모 컴포넌트 A와 자식 컴포넌트 B가 있음을 가정하고 그려봅시다.)

 

**데이터 바인딩**
  두 데이터 혹은 정보의 소스를 모두 일치시키는 기법이다. 즉 화면에 보이는 데이터와 브라우저 메모리에 있는 데이터를 일치시키는 기법이다. 즉 View와 Data를 **묶는 것**
이다.

**단방향 데이터 바인딩**

  데이터와 템플릿을 결합하여 화면을 생성한다. JavaScript(Model)에서 HTML(View)로 한 방향으로만 데이터를 동기화하는 것을 의미한다.(단방향이기 때문에 역으로 HTML(View)에서 JS(Model)로의 직접적인 데이터 갱신은 불가능) 

 **양방향 데이터 바인딩**을 데이터의 변화를 감지해 템플릿과 결합하여 화면을 갱신하고 화면에서의 입력에 따라 데이터를 갱신한다. 즉, 데이터와 화면 사이의 데이터가 계속해서 일치하게 되는 것이다.

**React에서 단방향을 사용하는 예시**

```jsx
const [inputValue, setInputValue] = useState("");
...
<input value={inputValue} onChange={e => setInputValue(e.target.value)} />
```

1. 초기값이 ""인 inputValue를 input의 value값으로 넣는다.
1. 사용자가 값을 변경할 때 onChange가 감지
1. 변경된 값을 setInputValue로 inputValue의 값을 업데이트
1. 변경된 값을 value를 통해 사용자에게 보여준다
****

**이렇듯 사용자가 변수를 직접적으로 변경하는 것이 아닌 저희가 변경을 감지하여 변수의 값을 바꿔준다.**

```
- 양방향 데이터 바인딩
    - 장점 : 코드의 사용면에서 코드량을 크게 줄여줌
    - 단점 : 변화에 따라 DOM 객체 전체를 렌더링해주거나 데이터를 바꿔주므로, 성능이 감소되는 경우가 있음
- 단방향 데이터 바인딩
    - 장점 : 데이터 변화에 따른 성능 저하 없이 DOM 객체 갱신 가능하며, 데이터의 흐름이 단방향이라, 코드에 가독성을 올려줌
    - 단점 : 변화를 감지하고 화면을 업데이트 하는 코드를 매번 작성해야 함
```
