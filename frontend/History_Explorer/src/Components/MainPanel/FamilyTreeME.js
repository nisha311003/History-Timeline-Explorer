import { colors } from '@mui/material';
import React, { useState } from 'react';
import { Tree } from 'react-d3-tree';

const FamilyTreeME = () => {
  
  return (
    <div className="family-tree">
      <div className="tree">
        <div className="node">
          <span className="name">Babur</span>
          <div className="children">
            <div className="node">
              <span className="name">Humayun</span>
              <div className="children">
                <div className="node">
                  <span className="name">Akbar</span>
                  <div className="children">
                    <div className="node">
                      <span className="name">Jahangir</span>
                      <div className="children">
                        <div className="node">
                          <span className="name">Shah Jahan</span>
                          <div className="children">
                            <div className="node">
                              <span className="name">Aurangzeb</span>
                              <div className="children">
                                <div className="node">
                                  <span className="name">Bahadur Shah I</span>
                                </div>
                                <div className="node">
                                  <span className="name">Jahandar Shah</span>
                                </div>
                                <div className="node">
                                  <span className="name">Farrukhsiyar</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyTreeME;
