=> How to split UI into components => 1:Logical separation 2: Some are reusable 3:low complexity
=> The 4 criteria for splitting a UI into components :
=> 01: logical separation of comonents = does the component contain ieces of content or layout that dont belong together ?
=> 02 : REusablity= is it possible to reuse part of the component
=> 03:REsponsibiities /complexity=is the component doing too many differnet things ? Does the component rely on too many props ? does the comonent have too many pieces os state and or effects? is the coe , including jsx too complex / congusing ?
=> 04 : Personal coing style = large or short one which one is good for you!
Framework :When to create a new component
Suggestion: When n doubt , start with a relatively big compoent , then split into smaller commonents as it becomes necessory.(skip if you are you need to reuse it )

=> General guidlines : creating a new component create a new abstraction.Abstraction have a cost because more abstractions require more mental energy to witch back and forth between components so try not to create new coonents too early.
=> Name a component according o what it does or what it displays . dont be afraid pf using long components names
=> Never decalre a new component inside another component .
=> co-locate related components inside the same file . dont separate components into different files too early.
=> it is coompletely normal that an appllication has components of many different sizes ,including very small and huge ones Any app has components of different sizes and reusability
