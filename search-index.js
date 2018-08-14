var N = null;var searchIndex = {};
searchIndex["cmake"]={"doc":"A build dependency for running `cmake` to build a native library","items":[[3,"Config","cmake","Builder style configuration for a pending CMake build.",N,N],[5,"build","","Builds the native library rooted at `path` with the default cmake options. This will return the directory in which the library was installed.",N,[[["p"]],["pathbuf"]]],[11,"new","","Creates a new blank set of configuration to build the project specified at the path `path`.",0,[[["p"]],["config"]]],[11,"generator","","Sets the build-tool generator (`-G`) for this compilation.",0,[[["self"],["t"]],["config"]]],[11,"cflag","","Adds a custom flag to pass down to the C compiler, supplementing those that this library already passes.",0,[[["self"],["p"]],["config"]]],[11,"cxxflag","","Adds a custom flag to pass down to the C++ compiler, supplementing those that this library already passes.",0,[[["self"],["p"]],["config"]]],[11,"define","","Adds a new `-D` flag to pass to cmake during the generation step.",0,[[["self"],["k"],["v"]],["config"]]],[11,"register_dep","","Registers a dependency for this compilation on the native library built by Cargo previously.",0,[[["self"],["str"]],["config"]]],[11,"target","","Sets the target triple for this compilation.",0,[[["self"],["str"]],["config"]]],[11,"no_build_target","","Disables the target option for this compilation.",0,[[["self"],["bool"]],["config"]]],[11,"host","","Sets the host triple for this compilation.",0,[[["self"],["str"]],["config"]]],[11,"out_dir","","Sets the output directory for this compilation.",0,[[["self"],["p"]],["config"]]],[11,"profile","","Sets the profile for this compilation.",0,[[["self"],["str"]],["config"]]],[11,"static_crt","","Configures whether the /MT flag or the /MD flag will be passed to msvc build tools.",0,[[["self"],["bool"]],["config"]]],[11,"build_arg","","Add an argument to the final `cmake` build step",0,[[["self"],["a"]],["config"]]],[11,"env","","Configure an environment variable for the `cmake` processes spawned by this crate in the `build` step.",0,[[["self"],["k"],["v"]],["config"]]],[11,"build_target","","Sets the build target for the final `cmake` build step, this will default to \"install\" if not specified.",0,[[["self"],["str"]],["config"]]],[11,"uses_cxx11","","Alters the default target triple on OSX to ensure that c++11 is available. Does not change the target triple if it is explicitly specified.",0,[[["self"]],["config"]]],[11,"always_configure","","Forces CMake to always run before building the custom target.",0,[[["self"],["bool"]],["config"]]],[11,"build","","Run this configuration, compiling the library with all the configured options.",0,[[["self"]],["pathbuf"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]]],"paths":[[3,"Config"]]};
initSearch(searchIndex);
